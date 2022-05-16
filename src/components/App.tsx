import '@rainbow-me/rainbowkit/styles.css';
import { Example } from './Example';

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { providers } from 'ethers';
import React, { FC } from 'react';
import { chain, createClient, WagmiProvider } from 'wagmi';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    apiProvider.infura(process.env.REACT_APP_ALCHEMY_API_KEY),
    apiProvider.fallback(),
  ],
);

const { connectors } = getDefaultWallets({
  appName: 'Farcaster',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider: provider as unknown as providers.BaseProvider,
});

const App: FC = () => {
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Example />
      </RainbowKitProvider>
    </WagmiProvider>
  );
};

export { App };
