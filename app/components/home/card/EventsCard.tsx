type AppEvent = {
  label: string;
  h3: string;
  title: string;
};

export const EventsCard = ({ label, h3, title }: AppEvent) => {
  return (
    <div>
      <div>{h3}</div>
      <div>{label}</div>
      <div>{title}</div>
    </div>
  );
};
