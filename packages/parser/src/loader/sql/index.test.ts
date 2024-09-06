import parse from './index.js';

test('Named query', () => {
  const text = `
  /* @name GetAllUsers */
  SELECT * FROM users;`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Named query selects some fields', () => {
  const text = `
  /* @name GetAllUsers */
  SELECT id, name FROM users;`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Named query with an inferred param', () => {
  const text = `
  /* @name GetUserById */
  SELECT * FROM users WHERE userId = :userId;`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Named query with two inferred params', () => {
  const text = `
  /* @name GetUserById */
  SELECT * FROM users WHERE userId = :userId or parentId = :userId;`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Named query with an inferred curly param', () => {
  const text = `
  /* @name GetUserById */
  SELECT * FROM users WHERE userId = \${userId};`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Named query with two inferred curly params', () => {
  const text = `
  /* @name GetUserById */
  SELECT * FROM users WHERE userId = \${userId} or parentId = \${userId};`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('something', () => {
  const text = `
  /* @name paymentMethodsGet */
  SELECT pm.payment_method_id,
    pm.payment_method_uuid,
    pm.customer_id,
    pm.tokens,
    CASE WHEN \${get_metadata}::BOOLEAN THEN pm.payment_method_metadata ELSE '{}' END AS payment_method_metadata,
    pm.processors,
    pm.processor_id,
    pm.name,
    pm.payment_method_first_name,
    pm.payment_method_last_name,
    pm.payment_type,
    pm.visual_cue,
    pm.expire_month,
    pm.expire_year,
    pm.zip,
    pm.zip IS NULL AS zip_required,
    pm.verified,
    pm.is_single_use,
    pm.payment_method_label,
    pp.gateway
  FROM payment_methods pm
  LEFT JOIN processors pp USING(processor_id)
  WHERE pm.customer_id = \${customer_id}
    AND CASE
      WHEN \${payment_method_id}::BIGINT IS NOT NULL THEN pm.payment_method_id = \${payment_method_id}::BIGINT
      WHEN \${payment_method_uuid}::TEXT IS NOT NULL THEN pm.payment_method_uuid = \${payment_method_uuid}::TEXT
    END;
  `;
  const parseTree = parse(text);
  console.log('PARSE TREEE', JSON.stringify(parseTree, null, 2));
});

test('Named query with a valid param', () => {
  const text = `
  /*
    @name CreateCustomer
    @param customers -> (customerName, contactName, address)
  */
  INSERT INTO customers (customer_name, contact_name, address)
  VALUES :customers;`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Named query with pick param used twice', () => {
  const text = `
  /*
    @name CreateCustomer
    @param customers -> (customerName, contactName, address)
  */
  INSERT INTO customers (customer_name, contact_name, address)
  VALUES :customers, :customers;`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Unused parameters produce warnings', () => {
  const text = `
  /*
    @name GetAllUsers
    @param userNames -> (...)
    @param users -> ((name,time)...)
  */
  SELECT * FROM users;`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Another test', () => {
  const text = `
    /* @name GetBooksByAuthorName */
    SELECT b.* FROM books b
    INNER JOIN authors a ON a.id = b.author_id
    WHERE a.first_name || ' ' || a.last_name = :authorName;`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Double and single quotes are supported', () => {
  const text = `
  /* @name GetAllUsers */
  SELECT u."rank" FROM users u where name = 'some-name';`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Postgres cast operator is correctly parsed', () => {
  const text = `
  /* @name GetAllUsers */
  SELECT u."rank" FROM users u where name = :name::text;`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Ignore multi-line comments in queries', () => {
  const text = `
  /* @name UpdateBooks */
  UPDATE books
  /* ignored comment foo: bar's */
  SET name = :name, rank = :rank WHERE id = :id;
`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Ignore params in inline single-line comments in queries', () => {
  const text = `
  /* @name UpdateBooks */
  UPDATE books
  -- ignored comment foo: bar's
  SET name = :name, rank = :rank WHERE id = :id;
`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Include inline single-line comments in statement body', () => {
  const text = `
  /* @name UpdateBooks */
  -- Inline comment 1
  UPDATE books
  -- Inline comment 2:
  SET name = :name, rank = :rank WHERE id = :id
  -- Inline comment 3
  ;
`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Comment starts in strings are ignored', () => {
  const text = `
  /* @name UpdateBooks */
  UPDATE books
  SET name = '-- /*', rank = :rank WHERE id = :id
  ;
`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Dollar quoted strings are supported', () => {
  const text = `
  /* @name CreateUpdatedAtFunction */
  CREATE FUNCTION UpdatedAt()
  RETURNS TRIGGER AS $$
      BEGIN
          NEW.updatedAt = NOW();
          RETURN NEW;
      END;
  $$ LANGUAGE plpgsql;`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});

test('Query with a PG range', () => {
  const text = `
  /* @name TestRange */
  select (ARRAY[1,2,3,4])[2:3] as arr;`;
  const parseTree = parse(text);
  expect(parseTree).toMatchSnapshot();
});
