import { Container, Section } from "@/components/sharedstyles";
import { Navbar } from "@/components/navbar";
import { NavBarLinks } from "@/constants/menu";
import { Banner } from "@/components/banner";
import { getFromGithub } from "@/lib/Api";
import useSWR from "swr";
import Card from '@/components/card';
import Grid from "@/components/grid";
import { useFormatRepoName } from "@/hooks/useFormatRepoName";
import Repo from "@/components/repo";

export default function Home() {
  const { data, error } = useSWR("/users/JrSchmidtt/repos", (url: string) =>
    getFromGithub(url, 0, 22)
  );
  if (error) return <div>Failed to load</div>;

  return (
    <>
      <Container backgroundType="image" backgroundColour="primary">
        <Section>
          <Navbar NavBarLinks={NavBarLinks} />
          <Banner />
        </Section>
      </Container>
      <Container>
        <Section>
          <h3>Open Source Projects</h3>
          <Grid>
          {data && data.map((repo: any) => (
            <Card key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <h4>{useFormatRepoName(repo.name)}</h4>
              </a>
              <p>{repo.description}</p>
              <ul>
                <li>Lang: {repo.language ?? "None"}</li>
                <li>Stars: {repo.stargazers_count}</li>
                <li>License: {repo.license?.name ?? "None"}</li>
                <li>Tags: {repo.topics.join(", ")}</li>
                <li>Homepage: {repo.homepage ?? "None"}</li>
              </ul>
            </Card>
          ))}
          </Grid>
        </Section>
      </Container>
    </>
  );
}