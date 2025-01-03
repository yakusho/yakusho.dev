import { Title } from "@solidjs/meta";

type HeadProps = {
  title?: string;
};

export function Head(props: HeadProps) {
  return (
    <>
      <Title>{props.title} @ yakusho.dev</Title>
    </>
  );
}
