import { testAction} from "@/actions/test";

export const runtime = 'edge';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        action={testAction}
      >
        <button type="submit">Test action</button>
      </form>
    </main>
  );
}
