export default function ExampleHouse() {
  const width = 400;
  const height = 500;

  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg"
         viewBox={`0 0 ${width} ${height}`}
         width={width}
         height={height}>
      <rect width={width} height={height} fill="white"/>

      <circle cx="50" cy="100" r="10" fill="red"/>
    </svg>
  );
}
