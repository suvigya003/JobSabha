// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'latest jobs',
    path: '/dashboard/latestJobs',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Result',
    path: '/dashboard/result',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'admit card',
    path: '/dashboard/admitCard',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Answer Key',
    path: '/dashboard/answerKey',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Syllabus',
    path: '/dashboard/syllabus',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
