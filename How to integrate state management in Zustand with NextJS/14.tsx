import { ArticlesSyncedWithClientView } from "../../views/articles-server-synced-with-client.view";
import { SyncedWithArticles } from "../../client/synced-with-articles";
import { getArticles } from "../../services/articles";
import { articles_mappers, articles_states } from "../../store/articles";
import { headers } from "next/headers";

export default async function ArticlesServerSyncedWithClientPage() {
  const headersList = headers();
  // We need a full URL to server when 
  // triggering server actions on server side.
  const articles = await getArticles(
    `https://${headersList.get("host")}` ?? ""
  );
  const state = articles_states.ok(articles_mappers.toModel(articles));

  return (
    <>
      <h1 className="my-4 p-3 text-3xl font-bold underline bg-green-100">
        Articles server synced with client
      </h1>
      <SyncedWithArticles state={state}>
        <ArticlesSyncedWithClientView />
      </SyncedWithArticles>
    </>
  );
}
