import Connect from './component/connect';
import Content from './component/content';
import Main from './component/main';
import Navbar from './component/nav';
import Projects from './component/projects';
import Skills from './component/skills';
import Spacer from './component/spacer';
import Testimonials from './component/testimonials';

export default function Home() {
  return (
    <div className='bg-black text-gray-300 '>
      <Navbar />
      <Main />
      <Content />
      <Skills />
      <Projects />
      <Testimonials />
      {/* <Spacer /> */}
      <Connect />
    </div>
  );
}
