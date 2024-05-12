import { twc } from "@/lib/twc";

//limite la taille horizontale de ma page, si je l'agrandi, on garde une marge
export const Layout = twc.div((props) => [
  `max-w-5xl w-full flex flex-col py-4 gap-4 mx-auto px-4`,
]);
export const LayoutTitle = twc.h1((props) => [`text-4xl font bold`]);
