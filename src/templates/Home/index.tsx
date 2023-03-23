import LinkWrapper from "@/components/LinkWrapper";
import Main from "@/components/Main";
import dynamic from "next/dynamic";
import { Info } from '@styled-icons/fluentui-system-regular/Info'
import { MapProps } from "@/components/Map";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <LinkWrapper href="/about">
        <Info size={32} aria-label="about"/>
      </LinkWrapper>
      <Map places={places}/>
    </>
  );
}
