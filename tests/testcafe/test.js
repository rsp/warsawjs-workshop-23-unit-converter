import { Selector as $ } from 'testcafe';

const url = 'http://localhost:3333/';

fixture('WarsawJS Workshop #23 Unit Converter').page(url);

test('title', async t => {
  await t
    .expect($('title').innerText).contains('Workshop #23');
});
