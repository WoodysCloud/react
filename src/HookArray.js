function ListItem({ value }) {
  return (
    <li>
      {value.name}: {value.color}
    </li>
  );
}

function HookArray({ carArray }) {
  return (
    <ul>
      {carArray.map((car) => {
        return <ListItem value={car} key={car.id} />;
      })}
    </ul>
  );
}

export default HookArray;
