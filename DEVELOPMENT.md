# Developer guide

## Semantic Commit Messages

The `drupal-twig-extensions` project uses semantic commit messages. A minor change to your commit message style can:

- make you a better programmer
- helps to automate the [CHANGELOG](CHANGELOG.md) generated for other developers

Don’t worry. You can still submit a Pull Request and if you don’t properly use semantic commit messages, we will edit the commits to add them. But we like them, so you might too.

### Commit message format:

```
<type>(<scope>): <subject>

<body>
```

`<body>` is optional.

`(<scope>)` is optional. If it is not included in a commit message, the first line of the message would just be: `type: subject`

### Details

```
+----------→ <type>: Must be one of:
│                    feat, fix, style, refactor,
│                    docs, style, test, chore
│
│     +-→ <subject>: The commit summary in present tense.
│     │              Starts with a capital letter.
│     │              Doesn't end in a period.
│     │
⎡‾‾⎤  ⎡‾‾‾‾‾‾‾‾‾‾‾‾⎤

feat: Add hat wobble

Added the "wobble" option, using the hattip
module as a dependency. Fixes #3

⎣⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎽⎦
│
│
+----------→ <body>: A longer version of the commit summary.
                     Can contain multiple paragraphs.
                     If the commit relates to a Github issue,
                     the body MUST include a reference to the
                     issue number, e.g. "Issue #2" or
                     "Fixes #2"
```

### Examples of `<type>`:

The `<type>` part of the commit message MUST be one of the following:

- `feat`: **new feature** for the user, not a new feature for a build script
- `fix`: **bug fix** for the user, not a fix to a build script
- `style`: **code formatting** like missing semicolons, etc.; no production code change
- `refactor`: **refactoring production code** like renaming a variable
- `docs`: **documentation** changes
- `test`: **test suite changes** like adding missing tests, refactoring tests; no production code change
- `chore`: **misc changes** like tooling changes (updating grunt tasks), etc.; no production code change

**Important Note:** A single commit can only use one `<type>`, which means if a commit covers multiple `types`, it must be refactored into multiple atomic commits.

### Examples of `<scope>`:

TLDR; If you don’t know what scope to use, don’t use one.

Scope is not as rigidly defined as `<type>`. It can be anything that helps a developer reading the commit message to understand the context of the commit subject. Alternatively, just make the subject more specific.

Here’s some scopes that could be used:

- `twig.js`: **Twig.js code** A code changes that affects the Twig.js half of the codebase, but not any of the Twing code. For example:
  ```
  fix(twig.js): Fix options handling of extensions
  ```
- `twing`: **Twing code** A code changes that affects the Twing half of the codebase, but not any of the Twig.js code. For example:
  ```
  fix(twing): Fix parameters to new TwingFunction calls
  ```
- `clean_id`: A code change that affects a particular Drupal filter, function or tag. For example:
  ```
  feat(clean_id): The clean_id filter now outputs unique IDs
  ```

## References:

### Semantic commit messages:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html
