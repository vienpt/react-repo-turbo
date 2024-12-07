import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/shadcn/components/ui/button";
import styles from "./page.module.css";
import { Input } from "@repo/shadcn/components/ui/input";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <Input className="rounded" />
        <Button variant={"ghost"} className="text-red-500">
          Shadcn Button
        </Button>
      </main>
    </div>
  );
}
