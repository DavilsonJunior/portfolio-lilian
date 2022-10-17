import { HowWorkContainer } from './HowWorkTopic.styles';

interface HowWorkTopicProps {
  number: number;
  title: string;
  description: string;
}

export function HowWorkTopic({
  number,
  title,
  description
}: HowWorkTopicProps) {
  return (
    <HowWorkContainer data-aos="zoom-in">
      <div className="item-ball">{number}</div>
      <div className="content">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </HowWorkContainer>
  );
}
