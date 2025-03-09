---
slug: fiddler-as-a-man-in-the-middle-proxy
title: Fiddler as a Man-in-the-Middle Proxy
description: A deep dive into the working of fiddler.
imageUrl: /fiddler-everywhere.svg
date: October 5, 2025
category: fiddler
---

## Why not to use fiddler classic to capture https?

**Fiddler Classic uses HTTP/1.1 and TLS 1.2 by default. However, the current HTTPS requests use HTTP/2 and TLS 1.3, which is why Fiddler Classic is unable to decrypt the traffic.**

To fix this issue, you can try using **Fiddler Everywhere**, which supports **HTTP/2** and **TLS 1.3**. Fiddler Classic, on the other hand, has limitations with newer protocols.



## Fiddler as a Man-in-the-Middle Proxy

### How Fiddler Captures Traffic

Fiddler works by intercepting network traffic and forwarding it to the intended server. It modifies **system proxy settings** to route traffic through itself.

#### **1. Capturing Local Traffic**
- Fiddler sets a proxy on `localhost:8866`.
- Modifies system settings to route traffic through this proxy.
- Logs HTTP and HTTPS traffic (with SSL decryption enabled).

#### **2. Capturing Remote Machine Traffic**
For remote traffic interception:
1. **Manually configure the client’s proxy** to point to Fiddler’s machine.
2. **For HTTPS traffic**, install Fiddler's root certificate on the client machine.
3. The remote machine’s requests now pass through Fiddler before reaching the server.

---

## Setting Proxy for Windows Services  

### Why Use This Method?  
By default, Windows services (especially those running as `LocalSystem` or `NetworkService`) **do not** use user-level proxy settings. Instead, they rely on system-wide proxy settings stored in the registry under `HKEY_USERS\S-1-5-18`.  

To force a specific proxy for Windows services, we **manually edit the registry**.  

---

### Step-by-Step Guide to Set Proxy in Registry for Windows Services  

#### Step 1: Open Registry Editor  
1. Press `Win + R`, type `regedit`, and hit **Enter**.  
2. Navigate to the following registry path:  
	1. HKEY_USERS\S-1-5-18\Software\Microsoft\Windows\CurrentVersion\Internet Settings

- `S-1-5-18` refers to the **SYSTEM account**, under which many Windows services run.  
- If your service runs under a different account, find its corresponding **SID** under `HKEY_USERS`.  

#### Step 2: Modify Proxy Settings in the Registry  
Inside `Internet Settings`, locate or create the following **values**:  

| Value Name     | Type    | Value |
|---------------|--------|-------|
| `ProxyEnable` | `DWORD` | `1` (Enables proxy) |
| `ProxyServer` | `String` | `http=proxyserver:8866;https=proxyserver:8866` |

#### Step 3: Restart Your Service  
After making changes:  
1. **Restart your service** using:  
```sh
net stop "YourServiceName" && net start "YourServiceName"
```


```js showLineNumbers
 const options = {
  theme: {
    dark: "github-dark-dimmed",
    light: "github-light",
  },
};
```




