interface ListItemProps {
  listItem: string;
}

export const ListItem = ({ listItem }: ListItemProps) => {
  return (
    <>
      <p className=''>{listItem}</p>
    </>
  );
};
