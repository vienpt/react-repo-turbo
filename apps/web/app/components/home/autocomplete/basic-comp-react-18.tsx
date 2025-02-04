// "use client";

// import { useCallback, useMemo, useState } from "react";
// import _ from "lodash-es";
// import { Input } from "@repo/shadcn/components/ui/input";

// const listItems = ["hello world", "italia", "I love", "columns", "composables"];

// /**
//  * TODO: apply some react patterns to improve this component
//  *  Also because of using React 19 already. We can apply some technique from that
//  */

// export default function Home() {
//   let [query, setQuery] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [items, setItems] = useState([]);
//   const [selected, setSelected] = useState(null);

//   // Gemini suggest
//   // const latestQuery = useRef("");

//   useMemo(() => {
//     const params = new URLSearchParams(window.location.search);
//     if (query) {
//       params.set("q", query);
//       window.history.replaceState({}, "", `?${params.toString()}`);
//     } else {
//       params.delete("q");
//       window.history.replaceState({}, "", window.location.pathname);
//     }
//     return params;
//   }, [query]);

//   const searchItems = useCallback(
//     _.debounce(async (value: string) => {
//       setLoading(true);
//       // latestQuery.current = value;
//       try {
//         const res = await new Promise((resolve) => {
//           setTimeout(() => {
//             // if (latestQuery.current === value) {
//             // }
//             resolve({
//               data: listItems,
//             });
//           }, 200);
//         });
//         // if (latestQuery.current === value) {
//         // }
//         setItems(res.data);
//       } catch (error) {
//         console.error("search failed: ", error);
//       } finally {
//         setLoading(false);
//       }
//     }, 500),
//     [],
//   );

//   function handleOnChange(val: string) {
//     setQuery(val);
//     if (val) {
//       searchItems(val);
//     }
//     // else {
//     //   setItems([]);
//     // }
//   }

//   function handleSelect(item: string) {
//     setQuery(item);
//     setSelected(item);
//     setItems([]);
//   }

//   const filterItems = useMemo(() => {
//     if (loading) {
//       return [];
//     }
//     return items.filter((item: string) =>
//       item.toLowerCase().includes(query.toLowerCase()),
//     );
//   }, [query, items]);

//   return (
//     <div>
//       <Input
//         value={query}
//         onChange={(e) => handleOnChange(e.target.value)}
//         onFocus={searchItems}
//       />
//       {loading && <p>loading...</p>}
//       <ul>
//         {filterItems.map((item) => (
//           <li key={item} onClick={() => handleSelect(item)}>
//             {item}
//           </li>
//         ))}
//       </ul>
//       <p>{selected}</p>
//     </div>
//   );
// }
