import app from './app';
import request from './request';

function config(path) {
  const $ = path.split('.');
  const conf = {
    app, request,
  };

  return search($, conf);
};

function search($, conf) {
  const key = $.shift() || null;

  if ($.length && conf[key]) {
    return search($, conf[key]);
  }

  return conf[key] || null;
}

export default config;
