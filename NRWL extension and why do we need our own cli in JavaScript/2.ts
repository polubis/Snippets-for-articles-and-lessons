import type { ExecutorContext } from "@nrwl/devkit";

export interface EchoExecutorOptions {
  textToCheck: string;
}

export default async function checkExecutor(
  options: CheckExecutorOptions,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  //   …

  const success = true;
  return { success };
}
