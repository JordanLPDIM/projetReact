
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react';


// import React from "react";
// import LoginScreen from "./src/screens/LoginScreen";
// import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
// import { TermsScreen } from "./src/screens/TermsScreen";

// import { useStarships } from "./src/hooks/useStarships";
import Navigator from "./src/navigation/Navigator";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    
      <Navigator />
    </QueryClientProvider>
  );
};

export default App;