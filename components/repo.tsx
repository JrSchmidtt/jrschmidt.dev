import styled from "styled-components";

interface RepoProps {
    name: string;
    url: string;
    description: string;
    stars: number;
    forks: number;
    license: string;
    Tags: string;
    homepage: string;
}

export default function Repo({ name, url, description, stars, forks, license, Tags, homepage }: RepoProps) {
  return <></>;
}