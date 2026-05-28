import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        aria-label="Close menu overlay"
      />

      <aside
        className={`fixed top-0 right-0 h-full w-[min(320px,90vw)] bg-[#DB261D] shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/20 px-4 py-4">
          <span className="text-white text-lg font-semibold">Menu</span>
          <button
            type="button"
            onClick={onClose}
            className="text-white"
            aria-label="Close menu"
          >
            <X className="size-6" />
          </button>
        </div>
        <div className="px-4 py-6 text-white">
          <p className="mb-4">Navigation</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="block text-white hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-white hover:underline">
                Posts
              </a>
            </li>
            <li>
              <a href="#" className="block text-white hover:underline">
                Tags
              </a>
            </li>
            <li>
              <a href="#" className="block text-white hover:underline">
                Years
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;
