const GenericLayoutDriverFactory = component => {
  const hasClass = className => component.getAttribute('class')
    .then(classes => classes
      .split(' ')
      .indexOf(className) !== -1
    );

  return {
    exists: () => !!component,
    getElement: () => component,
    isFullscreen: () => hasClass('fullscreenContainer')
  };
};

export default GenericLayoutDriverFactory;