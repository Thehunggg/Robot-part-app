import PartCard from "./PartCard";

function PartList() {
  const parts = [
    {
      id: 1,
      name: "Servo Motor",
      description: "角度を制御できるモーター",
      category: "モーター",
      price: "¥800",
      icon: "⚙️",
    },
    {
      id: 2,
      name: "Ultrasonic Sensor",
      description: "距離を測定するセンサー",
      category: "センサー",
      price: "¥500",
      icon: "📡",
    },
    {
      id: 3,
      name: "Arduino UNO",
      description: "ロボット制御に使うマイコンボード",
      category: "マイコン",
      price: "¥1,200",
      icon: "🔌",
    },
    {
      id: 4,
      name: "18650 Battery",
      description: "ロボットの電源に使う充電池",
      category: "バッテリー",
      price: "¥700",
      icon: "🔋",
    },
  ];

  return (
    <section>
      <h2 className="section-title">部品リスト</h2>

      <div className="part-list">
        {parts.map((part) => (
          <PartCard
            key={part.id}
            name={part.name}
            description={part.description}
            icon={part.icon}
          >
            <p>カテゴリー：{part.category}</p>
            <p>価格：{part.price}</p>
            <button>詳細を見る</button>
          </PartCard>
        ))}
      </div>
    </section>
  );
}

export default PartList;