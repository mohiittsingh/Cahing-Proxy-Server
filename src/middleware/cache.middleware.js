/* Request comes
↓
Generate Redis key
↓
Ask Redis
↓
Data found?
↓
YES → return cached data
↓
NO
↓
Continue to API  */

import cacheservice from "../services/cacheservice"
import cachekey from "../utils/cachekey"
