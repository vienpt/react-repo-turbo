import { Suspense } from "react";
import AutoComplete from "./index";

const listItems = ["hello world", "italia", "I love", "columns", "composables"];

/**
 * TODO: apply some react patterns to improve this component
 *  Also because of using React 19 already. We can apply some technique from that
 */

async function fetchListItems() {
  try {
    const res = await new Promise((resolve) => {
      resolve({
        data: listItems,
      });
    });

    return res?.data;
  } catch (error) {
    console.error("Fetch list items failed", error);
    throw new Error("Fetch list items failed");
  }
}

export default function PageAutocomplete() {
  const dataPromise = fetchListItems();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AutoComplete dataPromise={dataPromise} />
    </Suspense>
  );
}
