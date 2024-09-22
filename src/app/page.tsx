import { Container, Section } from "@/components/craft";
import { ModeToggle } from "@/components/theme/theme-toggle";

export default function Home() {
  return (
    <Section>
      <Container>
        <h1>Page principale</h1>
        <ModeToggle />
      </Container>
    </Section>
  );
}
