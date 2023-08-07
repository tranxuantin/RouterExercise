const AssignmentEmploy = () => {
  const employees = [
    {
      id: 1,
      name: "Hoa",
      age: 20,
    },
    {
      id: 2,
      name: "Khánh",
      age: 25,
    },
    {
      id: 3,
      name: "Tú",
      age: 22,
    },
  ];
  
  return (
    <>
      {employees.map((item) => (
        <>
          <ul key={item.id}>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.age}</li>
          </ul>
        </>
      ))}
    </>
  );
};

export default AssignmentEmploy;
