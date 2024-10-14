export default function Nav() {
  return (
    <div className="text-3xl font-extrabold italic p-12 color: bg-gray-50 shadow-lg">
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        <div>🍆 Food App</div>
      </button>
    </div>
  );
}
