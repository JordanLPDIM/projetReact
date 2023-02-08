import { useQuery } from '@tanstack/react-query'

async function fetchData() {
  const result = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes`);
  const json = await result.json();
  return json;
}

export function useRandomQuote() {
  return useQuery(["quote"], fetchData);
}