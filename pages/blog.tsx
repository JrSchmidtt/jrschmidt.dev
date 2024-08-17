import { Container, Section } from "@/components/sharedstyles";
import { getArticles } from "@/lib/Api";
import useSWR from "swr";
import Card from "@/components/card";
import Grid from "@/components/grid";
import { FormatDate } from "@/utils/data";

export default function Home() {
  const { data, error } = useSWR("jrschmidtt", (username: string) =>
    getArticles(username)
  );
  if (error) return <div>Failed to load</div>;

  return (
    <Container>
      <Section>
        <h3>My Public Notes</h3>
        <Grid>
          {data &&
            data.map((article: any) => (
              <Card key={article.id}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <img src={article.cover_image} alt={article.title} />
                  <h4>{article.title}</h4>
                </a>
                <p>{article.description}</p>
                <ul>
                  <li>
                    Published: {FormatDate(article.published_at, "pt-br")}
                  </li>
                  <li>Reading Time: {article.reading_time_minutes} minutes</li>
                </ul>
                <ul>
                  {article.tag_list.map((tag: string) => (
                    <li key={tag}>#{tag}</li>
                  ))}
                </ul>
              </Card>
            ))}
        </Grid>
      </Section>
    </Container>
  );
}