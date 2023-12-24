import { router } from 'prismy'
import homePageHandler from './routes/home'
import publicHandler from './routes/public'
import { signInHandler, signInPageHandler } from './routes/signin'
import { signUpHandler, signUpPageHandler } from './routes/signup'
import { signOutHandler } from './routes/signout'

export default router([
  ['/', homePageHandler],

  ['/signin', signInPageHandler],
  [['/signin', 'post'], signInHandler],
  ['/signup', signUpPageHandler],
  [['/signup', 'post'], signUpHandler],
  [['/signout', 'post'], signOutHandler],

  ['/public/:publicFilePath+', publicHandler]
])
