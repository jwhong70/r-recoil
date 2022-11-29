import { atom, selector, useRecoilState } from "recoil";

function Converter() {
  const minuteState = atom({ key: "minutes", default: 0 });
  const hourSelector = selector({
    key: "hours",
    get: ({ get }) => {
      const minutes = get(minuteState);
      return minutes / 60;
    },
    set: ({ set }, newValue) => {
      const minutes = Number(newValue) * 60;
      set(minuteState, minutes);
    },
  });
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(Number(event.currentTarget.value));
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(Number(event.currentTarget.value));
  };
  return (
    <div>
      <input
        value={minutes}
        type="number"
        placeholder="Minutes"
        onChange={onMinutesChange}
      />
      <input
        value={hours}
        type="number"
        placeholder="Hours"
        onChange={onHoursChange}
      />
    </div>
  );
}
export default Converter;
