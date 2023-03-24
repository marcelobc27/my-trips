import LinkWrapper from "@/components/LinkWrapper";
import * as S from "./styles";

import { Close } from "@styled-icons/evil/Close";
import Image from "next/image";
import { useRouter } from "next/router";

type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type PlaceTemplateProps = {
  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
    };
    gallery: ImageProps[];
  };
};

export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter()

  if(router.isFallback) return null
  return (
    <>
      <LinkWrapper href="/">
        <Close size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={index}
                src={image.url}
                alt={place.name}
                width={400}
                height={400}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
