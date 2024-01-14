/* eslint-disable react/prop-types */
const Class1 = ({ item }) => {
  return (
    <>
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan={4}>
          {item?.className}
        </td>
      </tr>

      {item?.students.map((student) => (
        <tr key={student.id} className="border-b border-[#7ECEB529]">
              <td className="p-5 text-sm md:text-xl">{student.id}</td>
          <td className="p-5 text-sm md:text-xl">
            <div className="flex space-x-3 items-center">
              <img
                className="w-8 h-8"
                src={student?.image}
                width={32}
                height={32}
                alt="John Smith"
              />
              <span className="whitespace-nowrap">{student?.name}</span>
            </div>
          </td>
          <td className="p-5 text-sm md:text-xl text-center">
            {student?.grade}
          </td>
          <td className="p-5 text-sm md:text-xl text-center">
            {student?.percentage}
          </td>
        </tr>
      ))}
      {/* <tr className="border-b border-[#7ECEB529]">
        <td className="p-5 text-sm md:text-xl">1</td>
        <td className="p-5 text-sm md:text-xl">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 h-8"
              src="./assets/avatar.png"
              width={32}
              height={32}
              alt="John Smith"
            />
            <span className="whitespace-nowrap">John Smith</span>
          </div>
        </td>
        <td className="p-5 text-sm md:text-xl text-center">A+</td>
        <td className="p-5 text-sm md:text-xl text-center">98%</td>
      </tr> */}
      {/* <tr className="border-b border-[#7ECEB529]">
        <td className="p-5 text-sm md:text-xl">2</td>
        <td className="p-5 text-sm md:text-xl">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 h-8"
              src="./assets/avatar.png"
              width={32}
              height={32}
              alt="John Smith"
            />
            <span className="whitespace-nowrap">John Smith</span>
          </div>
        </td>
        <td className="p-5 text-sm md:text-xl text-center">A+</td>
        <td className="p-5 text-sm md:text-xl text-center">98%</td>
      </tr>
      <tr className="border-b border-[#7ECEB529]">
        <td className="p-5 text-sm md:text-xl">3</td>
        <td className="p-5 text-sm md:text-xl">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 h-8"
              src="./assets/avatar.png"
              width={32}
              height={32}
              alt="John Smith"
            />
            <span className="whitespace-nowrap">John Smith</span>
          </div>
        </td>
        <td className="p-5 text-sm md:text-xl text-center">A+</td>
        <td className="p-5 text-sm md:text-xl text-center">98%</td>
      </tr> */}
    </>
  );
};

export default Class1;
