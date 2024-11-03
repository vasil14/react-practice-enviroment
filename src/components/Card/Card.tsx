import { Button } from 'antd';
import {
  Avatar,
  StyledCard,
  CardBody,
  CardFooter,
  CardHeader,
  CardSocials,
} from './styles';
import { FacebookLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

interface CardProps {
  url: string;
  name: string;
  role: string;
  facebook?: string;
  linkedin?: string;
  github?: string;
}

const Card = (props: CardProps) => {
  const { url, name, role, facebook, linkedin, github } = props;
  return (
    <>
      <StyledCard>
        <CardHeader className="card-header">
          <Avatar className="avatar" src={url} />
        </CardHeader>
        <CardBody>
          <div className="card-title">{name}</div>
          <div className="card-subtitle">{role}</div>
        </CardBody>
        <CardSocials>
          {facebook && (
            <a href={facebook} target="_blank">
              <FacebookLogo size={32} weight="fill" color="#1877F2" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank">
              <LinkedinLogo size={32} weight="fill" color="#0A66C2" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank">
              <GithubLogo size={32} weight="fill" color="#181717" />
            </a>
          )}
        </CardSocials>
        <CardFooter>
          <Button type="primary">Contact Me</Button>
        </CardFooter>
      </StyledCard>
    </>
  );
};

export default Card;
