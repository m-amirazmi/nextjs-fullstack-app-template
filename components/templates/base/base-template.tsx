import styles from './base-template.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
  children?: React.ReactNode;
}

export const BaseTemplate: React.FC<IBaseTemplate> = ({
  sampleTextProp,
  children,
}) => {
  return (
    <div className={styles.container}>
      <div>{children}</div>
      {sampleTextProp}
    </div>
  );
};
