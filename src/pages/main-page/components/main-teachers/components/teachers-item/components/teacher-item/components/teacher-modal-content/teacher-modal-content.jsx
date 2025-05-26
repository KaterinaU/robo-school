import { useEffect, useState } from 'react';

import { FacebookIcon } from '@/assets/icons/FacebookIcon';
import { InstagramIcon } from '@/assets/icons/InstagramIcon';
import { teachersImages } from '@/assets/images';
import { Select } from '@/components/select/index';
import { useWindowSize } from '@/hooks/useWindowSize';

import { SocialLinks } from './components/social-links/social-links';
import { TabsContent } from './components/tab-content';
import { Tabs } from './components/tabs';

import styles from './teacher-modal-content.module.scss';

export const TeacherModalContent = ({ teacher }) => {
  const { name, imageName, desc, links, education, experience, achievements } = teacher;

  const [options, setOptions] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const { isMobile } = useWindowSize();

  useEffect(() => {
    const newOptions = [];

    if (education?.length) newOptions.push({ value: 'education', label: 'Образование' });
    if (experience?.length) newOptions.push({ value: 'experience', label: 'Опыт работы' });
    if (achievements?.length) newOptions.push({ value: 'achievements', label: 'Награды' });

    setOptions(newOptions);
    setActiveTab(newOptions[0]?.value || null);
  }, [education, experience, achievements]);

  const getActiveContent = () => {
    switch (activeTab) {
      case 'education':
        return education || [];
      case 'experience':
        return experience || [];
      case 'achievements':
        return achievements || [];
      default:
        return [];
    }
  };

  const handleTabChange = (tab) => {
    if (tab && typeof tab === 'object' && 'value' in tab) {
      setActiveTab(tab.value);
    } else {
      setActiveTab(tab);
    }
  };

  const iconMap = {
    'facebook-icon.svg': FacebookIcon,
    'insta-icon.svg': InstagramIcon,
  };

  const adaptedLinks = Array.isArray(links)
    ? links.map(({ href, imagePath }) => ({
        href,
        imagePath: iconMap[imagePath.split('/').pop()],
      }))
    : [];
  return (
    <div className={styles.teacherModal}>
      <div className={styles.teacherBlock}>
        <img className={styles.teacherImg} src={teachersImages[imageName]} alt={name} />
        <div className={styles.teacherInfo}>
          <div className={styles.teacherName}>{name}</div>
          <p className={styles.teacherPost}>{desc}</p>
          <SocialLinks links={adaptedLinks} />
        </div>
      </div>

      <div className={styles.teacherTabs}>
        {isMobile ? (
          <Select options={options} value={activeTab} onChange={handleTabChange} />
        ) : (
          <Tabs options={options} value={activeTab} onClick={handleTabChange} />
        )}
        <div className={styles.tabsContent}>
          <TabsContent tabName={activeTab} content={getActiveContent()} />
        </div>
      </div>
    </div>
  );
};
