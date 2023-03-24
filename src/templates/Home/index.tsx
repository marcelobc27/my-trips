import { NextSeo } from "next-seo";
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
    <NextSeo 
      title="My trips" 
      description="A simple project"
      canonical="https://my-trips.marcelobarbosa.com.br"
      openGraph={{
        url: 'https://my-trips.marcelobarbosa.com.br',
        title: 'My Trips',
        description:
          'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
        // images: [
        //   {
        //     url: 'https://my-trips.willianjusten.com.br/img/cover.png',
        //     width: 1280,
        //     height: 720,
        //     alt: 'My Trips'
        //   }
        // ],
        site_name: 'My Trips'
      }}
    />
      <LinkWrapper href="/about">
        <Info size={32} aria-label="about"/>
      </LinkWrapper>
      <Map places={places}/>
    </>
  );
}
