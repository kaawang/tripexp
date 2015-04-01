## Git workflow
Initially, each machine pulls from the remote master.
- When beginning a new feature, checkout a new branch. Work only on files related to this feature.

`git checkout -b yourbranchname`

- Make commits on the feature branch locally until the feature is done. Use imperative and be descriptive; use semicolons to separate thoughts. Commit often.

`git status`

`git add filename`

`git commit`

- When a convenient place is reached to push, push to feature branch

`git push -u origin yourbranchname`

- When finished with a feature, push to make sure remote feature branch has all commits

`git push`

- Pull request in GUI
- Once the pull request is OK'd by the other pair, someone needs to merge it on their own machine, first making sure their own local master is up to date

`git checkout master`

`git pull`

`git pull origin thefeaturebranchtobemerged`

`git push`

- Now the remote master is up-to-date. Everyone pulls from remote master to local master, then checks out their feature branch and pulls from origin/master, and continues working.

`git checkout master`

`git pull`

`git checkout thebranchyouareworkingon`

`git pull origin master`

## Technologies
