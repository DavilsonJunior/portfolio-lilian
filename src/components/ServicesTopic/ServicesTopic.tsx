import { ServicesTopicsContainer } from './ServicesTopic.styles';

interface ServiceTopicsProps {
  title: string;
  description: string;
}

export function ServicesTopic({ title, description }: ServiceTopicsProps) {
  return (
    <ServicesTopicsContainer>
      <img
        src="/images/icons/icon-arrow-right-circle.svg"
        alt="arrow circle icon"
      />
      <div className="content">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </ServicesTopicsContainer>
  );
}
