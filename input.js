/**
 * cron "4 5,13 * * *" SFY.js
 */
const $ = new Env('易')
const notify = $.isNode() ? require('../sendNotify') : '';
