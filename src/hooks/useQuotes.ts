import { useQuery } from '@tanstack/react-query'

async function fetchData() {
  // max is 114
  const result = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes/114`);
  
  const json = await result.json();
  const processedData = await json.reduce((uniqueAuthors: { [x: string]: any; }, item: { author: string | number; }) => {
    if (!uniqueAuthors[item.author]) {
      uniqueAuthors[item.author] = item;
    }
    return uniqueAuthors;
  }, {});

  const processedDataArray = await Object.values(processedData);
  //return json;
  return processedDataArray;
}

export function useQuotes() {
  return useQuery(["starships"], fetchData);
}