import { Container, Section } from "@/components/sharedstyles";
import { Navbar } from "@/components/navbar";
import { NavBarLinks } from "@/constants/menu";
import { Banner } from "@/components/banner";
import { getArticles } from "@/lib/Api";
import useSWR from "swr";
import Card from '@/components/card';
import Grid from "@/components/grid";

export default function Home() {
  const { data, error } = useSWR("jrschmidtt", (username: string) =>
    getArticles(username)
  );
  if (error) return <div>Failed to load</div>;
  console.log(data)

  return (
      <Container>
        <Section>
          <h3>My Public Notes</h3>
          <Grid>
          {data && data.map((article: any) => (
            <Card key={article.id}>
              <img src={article.cover_image} alt={article.title} />
              <a href={article.html_url} target="_blank" rel="noopener noreferrer">
                <h4>{article.title}</h4>
              </a>
              <p>{article.description}</p>
              <ul>
                <li>Published: {article.published_at}</li>
                <li>Reading Time: {article.reading_time_minutes} minutes</li>
              </ul>
            </Card>
          ))}
          </Grid>
        </Section>
      </Container>
  );
}