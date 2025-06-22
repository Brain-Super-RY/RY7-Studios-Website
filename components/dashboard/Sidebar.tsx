'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, ShoppingCart, Briefcase, User, Settings, X, ChevronLeft, BarChart2, ShoppingBag, Users, MessageCircle, Calendar, FileText, Layers, AlertCircle, Sun, Moon, Bell, Grid, List, Image, Video, Table, MapPin, Lock, HelpCircle, LogOut, Globe, ChevronDown, ChevronUp
} from 'lucide-react';
import { useState } from 'react';

const menu = [
  {
    label: 'Dashboards',
    icon: <LayoutDashboard />, // Analytics, Ecommerce
    sub: [
      { label: 'Analytics', href: '/dashboard/admin' },
      { label: 'Ecommerce', href: '/dashboard/admin/ecommerce' },
    ],
  },
  {
    label: 'Applications',
    icon: <Layers />, // Projects, Chat, Calendar, Invoice
    sub: [
      { label: 'Projects', href: '/dashboard/admin/projects', sub: [
        { label: 'Clients', href: '/dashboard/admin/projects/clients' },
        { label: 'Team', href: '/dashboard/admin/projects/team' },
        { label: 'Project', href: '/dashboard/admin/projects/project' },
        { label: 'Task', href: '/dashboard/admin/projects/task' },
        { label: 'Kanban Board', href: '/dashboard/admin/projects/kanban' },
      ]},
      { label: 'Chat', href: '/dashboard/admin/chat' },
      { label: 'Calendar', href: '/dashboard/admin/calendar' },
      { label: 'Invoice', href: '/dashboard/admin/invoice' },
    ],
  },
  {
    label: 'Components',
    icon: <Grid />,
    sub: [
      { label: 'UI Elements', href: '/dashboard/admin/ui', sub: [
        { label: 'Alerts', href: '/dashboard/admin/ui/alerts' },
        { label: 'Avatar', href: '/dashboard/admin/ui/avatar' },
        { label: 'Buttons', href: '/dashboard/admin/ui/buttons' },
        { label: 'Badges', href: '/dashboard/admin/ui/badges' },
        { label: 'Cards', href: '/dashboard/admin/ui/cards' },
        { label: 'Carousels', href: '/dashboard/admin/ui/carousels' },
        { label: 'Dropdowns', href: '/dashboard/admin/ui/dropdowns' },
        { label: 'Grids', href: '/dashboard/admin/ui/grids' },
        { label: 'Images', href: '/dashboard/admin/ui/images' },
        { label: 'List', href: '/dashboard/admin/ui/list' },
        { label: 'Modals', href: '/dashboard/admin/ui/modals' },
        { label: 'Navs', href: '/dashboard/admin/ui/navs' },
        { label: 'Navbar', href: '/dashboard/admin/ui/navbar' },
        { label: 'Paginations', href: '/dashboard/admin/ui/paginations' },
        { label: 'Popover & Tooltips', href: '/dashboard/admin/ui/popover' },
        { label: 'Progress', href: '/dashboard/admin/ui/progress' },
        { label: 'Spinners', href: '/dashboard/admin/ui/spinners' },
        { label: 'Tabs & Accordions', href: '/dashboard/admin/ui/tabs' },
        { label: 'Typography', href: '/dashboard/admin/ui/typography' },
        { label: 'Videos', href: '/dashboard/admin/ui/videos' },
      ]},
      { label: 'Advanced UI', href: '/dashboard/admin/advanced', sub: [
        { label: 'Animation', href: '/dashboard/admin/advanced/animation' },
        { label: 'Clip Board', href: '/dashboard/admin/advanced/clipboard' },
        { label: 'Dragula', href: '/dashboard/admin/advanced/dragula' },
        { label: 'File Manager', href: '/dashboard/admin/advanced/file-manager' },
        { label: 'Highlight', href: '/dashboard/admin/advanced/highlight' },
        { label: 'Range Slider', href: '/dashboard/admin/advanced/range-slider' },
        { label: 'Ratings', href: '/dashboard/admin/advanced/ratings' },
        { label: 'Ribbons', href: '/dashboard/admin/advanced/ribbons' },
        { label: 'Sweet Alerts', href: '/dashboard/admin/advanced/sweet-alerts' },
        { label: 'Toasts', href: '/dashboard/admin/advanced/toasts' },
      ]},
    ],
  },
  {
    label: 'Forms',
    icon: <FileText />,
    sub: [
      { label: 'Basic Elements', href: '/dashboard/admin/forms/basic' },
      { label: 'Advance Elements', href: '/dashboard/admin/forms/advance' },
      { label: 'Validation', href: '/dashboard/admin/forms/validation' },
      { label: 'Wizard', href: '/dashboard/admin/forms/wizard' },
      { label: 'Editors', href: '/dashboard/admin/forms/editors' },
      { label: 'File Upload', href: '/dashboard/admin/forms/upload' },
      { label: 'Image Crop', href: '/dashboard/admin/forms/crop' },
    ],
  },
  {
    label: 'Charts',
    icon: <BarChart2 />,
    sub: [
      { label: 'Apex', href: '/dashboard/admin/charts/apex' },
      { label: 'JustGage', href: '/dashboard/admin/charts/justgage' },
      { label: 'Chartjs', href: '/dashboard/admin/charts/chartjs' },
      { label: 'Toast', href: '/dashboard/admin/charts/toast' },
    ],
  },
  {
    label: 'Tables',
    icon: <Table />,
    sub: [
      { label: 'Basic', href: '/dashboard/admin/tables/basic' },
      { label: 'Datatables', href: '/dashboard/admin/tables/datatables' },
      { label: 'Editable', href: '/dashboard/admin/tables/editable' },
    ],
  },
  {
    label: 'Icons',
    icon: <User />,
    sub: [
      { label: 'Font Awesome', href: '/dashboard/admin/icons/fontawesome' },
      { label: 'Line Awesome', href: '/dashboard/admin/icons/lineawesome' },
      { label: 'Icofont', href: '/dashboard/admin/icons/icofont' },
      { label: 'Iconoir', href: '/dashboard/admin/icons/iconoir' },
    ],
  },
  {
    label: 'Maps',
    icon: <MapPin />,
    sub: [
      { label: 'Google Maps', href: '/dashboard/admin/maps/google' },
      { label: 'Leaflet Maps', href: '/dashboard/admin/maps/leaflet' },
      { label: 'Vector Maps', href: '/dashboard/admin/maps/vector' },
    ],
  },
  {
    label: 'Pages',
    icon: <FileText />,
    sub: [
      { label: 'Profile', href: '/dashboard/admin/profile' },
      { label: 'Notifications', href: '/dashboard/admin/notifications' },
      { label: 'Timeline', href: '/dashboard/admin/timeline' },
      { label: 'Treeview', href: '/dashboard/admin/treeview' },
      { label: 'Starter Page', href: '/dashboard/admin/starter' },
      { label: 'Pricing', href: '/dashboard/admin/pricing' },
      { label: 'Blogs', href: '/dashboard/admin/blogs' },
      { label: 'FAQs', href: '/dashboard/admin/faqs' },
      { label: 'Gallery', href: '/dashboard/admin/gallery' },
    ],
  },
  {
    label: 'Authentication',
    icon: <Lock />,
    sub: [
      { label: 'Log in', href: '/login-admin' },
      { label: 'Register', href: '/register-admin' },
      { label: 'Re-Password', href: '/dashboard/admin/repassword' },
      { label: 'Lock Screen', href: '/dashboard/admin/lock' },
      { label: 'Maintenance', href: '/dashboard/admin/maintenance' },
      { label: 'Error 404', href: '/dashboard/admin/404' },
      { label: 'Error 500', href: '/dashboard/admin/500' },
    ],
  },
];

function SidebarMenu({ items, level = 0, openMenus, setOpenMenus, pathname }) {
  return (
    <ul className={level > 0 ? `pl-4 border-l border-gray-800` : ""}>
      {items.map((item, idx) => {
        const hasSub = !!item.sub;
        const isOpen = openMenus[item.label];
        const isActive = pathname === item.href;
        return (
          <li key={item.label} className="mb-1">
            <div className="flex items-center">
              <Link href={item.href || "#"} className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors w-full ${isActive ? "bg-primary text-white" : "hover:bg-gray-700 text-gray-200"}`}> 
                {item.icon && level === 0 && <span>{item.icon}</span>}
                <span>{item.label}</span>
              </Link>
              {hasSub && (
                <button onClick={() => setOpenMenus((prev) => ({ ...prev, [item.label]: !isOpen }))} className="ml-2">
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              )}
            </div>
            {hasSub && isOpen && (
              <SidebarMenu items={item.sub} level={level + 1} openMenus={openMenus} setOpenMenus={setOpenMenus} pathname={pathname} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

const Sidebar = ({ isOpen, setOpen }: { isOpen: boolean, setOpen: (isOpen: boolean) => void }) => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState({});

  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black/60 z-30 md:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={() => setOpen(false)}
      ></div>
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen bg-gray-900 text-white flex flex-col z-40 transition-all duration-300 ease-in-out ${isOpen ? 'w-72' : 'w-20'}`}>
        <div className={`p-4 border-b border-gray-800 flex items-center ${isOpen ? 'justify-between' : 'justify-center'}`}>
          <Link href="/" className={`flex items-center space-x-2 overflow-hidden ${!isOpen && 'w-0'}`}>
            <img src="/logo.svg" alt="RY7 Studios" className="h-8 w-8 flex-shrink-0" />
            <span className="text-xl font-bold whitespace-nowrap">RY7 Studios</span>
          </Link>
          <button onClick={() => setOpen(!isOpen)} className="p-1 rounded-full hover:bg-gray-800">
            {isOpen ? <ChevronLeft className="w-6 h-6"/> : <img src="/logo.svg" alt="RY7" className="h-8 w-8" />}
          </button>
        </div>
        <nav className="flex-grow p-4 overflow-y-auto">
          <SidebarMenu items={menu} openMenus={openMenus} setOpenMenus={setOpenMenus} pathname={pathname} />
        </nav>
        {/* Upgrade Plan Card */}
        <div className={`p-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <div className="bg-primary/10 rounded-lg p-6 text-center">
            <h5 className="font-semibold text-lg mb-2">Mannat Themes</h5>
            <p className="text-sm text-gray-400 mb-4">Rizz is a high quality web applications.</p>
            <button className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary-700 transition">
              Upgrade your plan
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar; 