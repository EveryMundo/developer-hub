import styles from "./PlaygroundDemo.module.css";

const PlaygroundDemo = ({ src, title, height = 400, aspectRatio, repo }) => {
  const className = aspectRatio ? ` ${styles.aspectRatio}` : "";
  const iframeClassName = aspectRatio ? styles.aspectRatioContent : "";

  const style = aspectRatio
    ? {
        "--aspect-ratio": `calc(${aspectRatio})`,
      }
    : {
        height: `${height}px`,
      };

  return (
    <div className={styles.playgroundDemo}>
      <div className={styles.toolbar}>
        {repo && (
          <a style={{ fontSize: 12 }} target="_blank" href={repo}>
            View source
          </a>
        )}
        <a
          style={{ fontSize: 12, fontWeight: 500 }}
          target="_blank"
          href={src}
          className="nx-text-primary-600"
        >
          Open in Playground ↗
        </a>
      </div>
      <div className={className} style={style}>
        <iframe
          className={iframeClassName}
          src={`${src}&_lonely=true`}
          title={`Demo of: ${title}`}
        />
      </div>
    </div>
  );
};

export default PlaygroundDemo;
