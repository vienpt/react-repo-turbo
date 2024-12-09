import { Button } from "@repo/shadcn/components/ui/button";
import { Input } from "@repo/shadcn/components/ui/input";

export default function Home() {
  return (
    <div>
      <main className="container mx-auto">
        <Input />
        <Button variant={"ghost"} className="text-red-500">
          Shadcn Button
        </Button>
      </main>
    </div>
  );
}
