import Background from "@/components/Background";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Background />
      <div className="bg-gradient-to-b from-purple-100 to-transparent w-screen h-52 z-10 absolute top-0"></div>
    </div>
  );
}
