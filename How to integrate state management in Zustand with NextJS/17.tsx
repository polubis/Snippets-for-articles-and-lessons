import { ArticlesSyncedWithClientView } from "../../views/articles-server-synced-with-client.view";
import { SyncedWithArticles } from "../../client/synced-with-articles";
import { getArticles } from "../../services/articles";
import { articles_mappers, articles_states } from "../../store/articles";
import { headers } from "next/headers";

export default async function ArticlesServerSyncedWithClientPage() {
  const headersList = headers();
  // For NextJS server actions executed on server side
  // we need full server URL. Alias like "/api/articles" works
  // only on client!
  const articles = await getArticles(
    `https://${headersList.get("host")}` ?? ""
  );
  const state = articles_states.ok(articles_mappers.toModel(articles));

  return (
    <>
      <SyncedWithArticles state={state} />
      <h1 className="my-4 p-3 text-3xl font-bold underline bg-green-100">
        Articles server synced with client
      </h1>
      {/* Here we're safe to use our state! */}
      <AnyComponentThatIsUsingZustandState />
    </>
  );
}
