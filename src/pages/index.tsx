import LinkWrapper from "@/components/LinkWrapper";
import Main from "@/components/Main";
import dynamic from "next/dynamic";
import { Info } from '@styled-icons/fluentui-system-regular/Info'

const DynamicMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <Info size={32} aria-label="about"/>
      </LinkWrapper>
      <DynamicMap/>
    </>
  );
}
