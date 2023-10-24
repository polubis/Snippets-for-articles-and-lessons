import { useStoreSync } from '../development-kit/use-store-sync';

const HomePage: React.FC = () => {
  const { site } = useStaticQuery<HomePageProps>(graphql`
    query HomePageQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);
  // Sync happens here!
  useStoreSync(useHomeStore, { is: `ready`, ...site.siteMetadata })();
