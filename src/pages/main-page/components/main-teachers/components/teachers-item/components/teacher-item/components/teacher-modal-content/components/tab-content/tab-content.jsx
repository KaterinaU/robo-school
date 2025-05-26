import styles from './tabs-content.module.scss';

export const TabsContent = ({ tabName, content }) => {
  if (!content || content.length === 0) return null;

  const isUniversityItem = (item) => 'date' in item && 'university' in item;
  const isCourseItem = (item) => 'title' in item && 'courses' in item;

  const renderEducation = () => {
    return content.map((item) => {
      if (isUniversityItem(item)) {
        return (
          <div key={item.date + item.university}>
            {[item.date, item.university, item.faculty, item.speciality, item.form].map(
              (text, i) => (
                <p key={i} className={styles.tabsContentText}>
                  {text}
                </p>
              ),
            )}
          </div>
        );
      }

      if (isCourseItem(item)) {
        return (
          <div key={item.title}>
            <h3 className={styles.tabsContentTitle}>{item.title}</h3>
            {[item.courses, item.trainings].map((text, i) => (
              <p key={i} className={styles.tabsContentText}>
                {text}
              </p>
            ))}
          </div>
        );
      }

      return null;
    });
  };

  const renderList = () => {
    return content.map((item, index) => (
      <div key={item + index}>
        <p className={styles.tabsContentText}>{item}</p>
      </div>
    ));
  };

  return tabName === 'education' ? renderEducation() : renderList();
};
